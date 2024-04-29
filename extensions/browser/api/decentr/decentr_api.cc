#include "extensions/browser/api/decentr/decentr_api.h"
#include "chrome/browser/decentr/decentr_storage_service_factory.h"
#include "components/decentr/decentr_storage_service.h"
#include "extensions/browser/event_router.h"
#include "extensions/common/api/decentr.h"

#include <memory>

namespace extensions {
namespace api {
using DecentrStorageServiceFactory = ::decentr::DecentrStorageServiceFactory;
using DecentrStorageService = ::decentr::DecentrStorageService;

ExtensionFunction::ResponseAction DecentrGetFunction::Run() {
   absl::optional<decentr::Get::Params> params(
      decentr::Get::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params);

  auto* pDecentr_storage = static_cast<DecentrStorageService*>(
      DecentrStorageServiceFactory::GetForBrowserContext(browser_context()));
  pDecentr_storage->Get(params->key,
                        base::BindOnce(&DecentrGetFunction::OnGet, this));

  return RespondLater();
}

void DecentrGetFunction::OnGet(std::pair<std::string, std::string> object) {
  auto [key, value] = std::move(object);

  base::Value::Dict dict;
  dict.Set(std::move(key), std::move(value));

  Respond(WithArguments(std::move(dict)));
}

ExtensionFunction::ResponseAction DecentrSetFunction::Run() {
   absl::optional<decentr::Set::Params> params(
      decentr::Set::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params);

  auto* pDecentr_storage = static_cast<DecentrStorageService*>(
      DecentrStorageServiceFactory::GetForBrowserContext(browser_context()));
  pDecentr_storage->Set(
      {params->data.key, params->data.value});

  auto* event_router = extensions::EventRouter::Get(browser_context());

  std::unique_ptr<extensions::Event> event(new extensions::Event(
      extensions::events::DECENTR_ON_CHANGED,
      extensions::api::decentr::OnChanged::kEventName,
      extensions::api::decentr::OnChanged::Create(
          params->data.key)));
  event_router->BroadcastEvent(std::move(event));

  return RespondNow(NoArguments());
}

}  // namespace api
}  // namespace extensions
