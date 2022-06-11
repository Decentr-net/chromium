#ifndef EXTENSIONS_API_PASSWORDS_PASSWORDS_API_H_
#define EXTENSIONS_API_PASSWORDS_PASSWORDS_API_H_

#include <stddef.h>

#include "extensions/browser/extension_function.h"

namespace extensions {
namespace api {
  
class PasswordsGetFunction
    : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("passwords.get", PASSWORDS_GET)

 protected:
  ~PasswordsGetFunction() override {}

  ResponseAction Run() override;
};

class PasswordsAddFunction
  : public ExtensionFunction {
 public:
  DECLARE_EXTENSION_FUNCTION("passwords.add", PASSWORDS_ADD)

 protected:
  ~PasswordsAddFunction() override {}

  ResponseAction Run() override;
};

}  // namespace api
}  // namespace extensions
#endif  // EXTENSIONS_API_PASSWORDS_PASSWORDS_API_H_