#ifndef EXTENSIONS_API_DECENTR_DECENTR_API_H_
#define EXTENSIONS_API_DECENTR_DECENTR_API_H_

#include <stddef.h>

#include "extensions/browser/extension_function.h"

namespace extensions {

class DecentrGetFunction
    : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("decentr.get", DECENTR_GET)

 protected:
  ~DecentrGetFunction() override {}

  ResponseAction Run() override;
};
}  // namespace extensions

#endif  // EXTENSIONS_API_DECENTR_DECENTR_API_H_
