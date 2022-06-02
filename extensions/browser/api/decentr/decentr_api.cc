#include "extensions/browser/api/decentr/decentr_api.h"

namespace extensions {

ExtensionFunction::ResponseAction DecentrGetFunction::Run() {
  return RespondNow(NoArguments());
}

}  // namespace extensions
