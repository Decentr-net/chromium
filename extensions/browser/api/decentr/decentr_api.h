#ifndef EXTENSIONS_API_DECENTR_DECENTR_API_H_
#define EXTENSIONS_API_DECENTR_DECENTR_API_H_

#include <stddef.h>

#include "extensions/browser/extension_function.h"

namespace extensions {
namespace api {
  
class DecentrGetFunction
    : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("decentr.get", DECENTR_GET)

 protected:
  ~DecentrGetFunction() override {}

  ResponseAction Run() override;
 private:
  void OnGet(std::pair<std::string, std::string>);
};

class DecentrSetFunction
  : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("decentr.set", DECENTR_SET)

 protected:
  ~DecentrSetFunction() override {}

  ResponseAction Run() override;
};

}  // namespace api
}  // namespace extensions

#endif  // EXTENSIONS_API_DECENTR_DECENTR_API_H_
