#include "extensions/browser/api/passwords/passwords_api.h"
#include "out/release/gen/extensions/common/api/passwords.h"
#include <memory>

#include "chrome/browser/profiles/profile.h"
#include "chrome/browser/password_manager/password_store_factory.h"
#include "components/password_manager/core/browser/ui/saved_passwords_presenter.h"
#include "components/keyed_service/core/service_access_type.h"

namespace extensions {
namespace api {
ExtensionFunction::ResponseAction PasswordsGetFunction::Run() {
   std::unique_ptr<passwords::Get::Params> params(
   passwords::Get::Params::Create(args()));
   EXTENSION_FUNCTION_VALIDATE(params.get());

  base::Value dict(base::Value::Type::DICTIONARY);
  dict.SetStringKey("decentr_storage_key", "decentr_storage_data");
  return RespondNow(OneArgument(base::Value(std::move(dict))));
}

ExtensionFunction::ResponseAction PasswordsAddFunction::Run() {
  
  std::unique_ptr<passwords::Add::Params> params(
  passwords::Add::Params::Create(args()));
  EXTENSION_FUNCTION_VALIDATE(params.get());
  //LOG(INFO) << "Passwords params getting";
  Profile* profile = Profile::FromBrowserContext(browser_context());
  scoped_refptr<password_manager::PasswordStoreInterface> store =
  PasswordStoreFactory::GetForProfile(profile,
                                          ServiceAccessType::EXPLICIT_ACCESS);
  password_manager::SavedPasswordsPresenter spp(store);
  spp.Init();
  password_manager::PasswordForm password_form;
  password_form.username_value = u"SuperTestUser4";
  password_form.password_value = u"SuperPassword4";
  password_form.url = GURL("https://account.mail.ru/login/");
  password_form.action = GURL("https://auth.mail.ru/cgi-bin/auth");
  password_form.signon_realm = "https://account.mail.ru/";
  password_form.username_element = u"username";
  password_form.password_element = u"password";
  spp.AddPassword(password_form);
    
  return RespondNow(NoArguments());
  
}

}  // namespace api
}  // namespace extensions