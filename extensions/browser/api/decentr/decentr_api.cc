#include "extensions/browser/api/decentr/decentr_api.h"
#include "extensions/common/api/decentr.h"
#include "chrome/browser/decentr/decentr_storage_service_factory.h"
#include "components/decentr/decentr_storage_service.h"


#include <memory>

namespace extensions {
namespace api {
using DecentrStorageServiceFactory = ::decentr::DecentrStorageServiceFactory;
using DecentrStorageService = ::decentr::DecentrStorageService;

ExtensionFunction::ResponseAction DecentrGetFunction::Run() {
  std::unique_ptr<decentr::Get::Params> params(decentr::Get::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params.get());

  auto* pDecentr_storage =  static_cast<DecentrStorageService*>(DecentrStorageServiceFactory::GetForBrowserContext(browser_context()));
  pDecentr_storage->Get(params->key, base::BindOnce(&DecentrGetFunction::OnGet, this));

  return RespondLater();
}

void DecentrGetFunction::OnGet(std::pair<std::string, std::string> object) {
  auto [key, value] = std::move(object);

  base::Value dict(base::Value::Type::DICTIONARY);
  dict.SetStringKey(std::move(key), std::move(value));

  Respond(OneArgument(base::Value(std::move(dict))));
}


ExtensionFunction::ResponseAction DecentrSetFunction::Run() {
  std::unique_ptr<decentr::Set::Params> params(decentr::Set::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params.get());

  auto* pDecentr_storage =  static_cast<DecentrStorageService*>(DecentrStorageServiceFactory::GetForBrowserContext(browser_context()));
  pDecentr_storage->Set({std::move(params->data.key), std::move(params->data.value)});

  return RespondNow(NoArguments());
}

}  // namespace api
}  // namespace extensions
