#include "extensions/browser/api/decentr/decentr_api.h"

#include <memory>

namespace extensions {
namespace api {
ExtensionFunction::ResponseAction DecentrGetFunction::Run() {
  // std::unique_ptr<decentr::Get::Params> params(
  //     decentr::Get::Params::Create(args()));
  // EXTENSION_FUNCTION_VALIDATE(params.get());

  base::Value dict(base::Value::Type::DICTIONARY);
  dict.SetStringKey("decentr_storage_key", "decentr_storage_data");

  return RespondNow(OneArgument(base::Value(std::move(dict))));
}

ExtensionFunction::ResponseAction DecentrSetFunction::Run() {
  return RespondNow(NoArguments());
}

}  // namespace api
}  // namespace extensions
