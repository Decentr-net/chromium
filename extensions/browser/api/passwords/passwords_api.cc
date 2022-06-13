#include "extensions/browser/api/passwords/passwords_api.h"
#include "out/release/gen/extensions/common/api/passwords.h"
#include <memory>
#include <codecvt>
#include <locale>
#include "chrome/browser/profiles/profile.h"
#include "chrome/browser/password_manager/password_store_factory.h"
#include "components/password_manager/core/browser/ui/saved_passwords_presenter.h"
#include "components/keyed_service/core/service_access_type.h"
#include "components/password_manager/core/browser/form_parsing/form_parser.h"
#include "components/password_manager/core/browser/password_manager_util.h"

namespace extensions {
namespace api {
ExtensionFunction::ResponseAction PasswordsGetFunction::Run() {
   std::unique_ptr<passwords::Get::Params> params(
   passwords::Get::Params::Create(args()));
   EXTENSION_FUNCTION_VALIDATE(params.get());

  base::Value dict(base::Value::Type::DICTIONARY);
  dict.SetStringKey("key", "fsfsfsdfsdfsd");
  return RespondNow(OneArgument(base::Value(std::move(dict))));
}

ExtensionFunction::ResponseAction PasswordsAddFunction::Run() {
  
  std::unique_ptr<passwords::Add::Params> params(
  passwords::Add::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params.get());
  LOG(INFO) << params->data.password;
  Profile* profile = Profile::FromBrowserContext(browser_context());
  scoped_refptr<password_manager::PasswordStoreInterface> store =
  PasswordStoreFactory::GetForProfile(profile, ServiceAccessType::EXPLICIT_ACCESS);
  password_manager::SavedPasswordsPresenter spp(store);
  spp.Init();
 
  std::wstring_convert<std::codecvt_utf8_utf16<char16_t>, char16_t> convert;
  std::string password = params->data.password;
  std::u16string password_value = convert.from_bytes(password);
  std::string username = params->data.username;
  std::u16string username_value = convert.from_bytes(username);

  password_manager::PasswordForm password_form;
  password_form.username_value = username_value;
  password_form.password_value = password_value;
  password_form.url = password_manager_util::StripAuthAndParams(password_manager_util::ConstructGURLWithScheme(params->data.url));
  password_form.signon_realm = password_manager::GetSignonRealm(password_form.url);
  spp.AddPassword(password_form);
    
  return RespondNow(NoArguments());
  
}

}  // namespace api
}  // namespace extensions