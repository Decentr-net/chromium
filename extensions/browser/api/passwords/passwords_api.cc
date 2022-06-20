#include "extensions/browser/api/passwords/passwords_api.h"
#include "extensions/browser/api/passwords/passwords.h"
//#include "out/release/gen/extensions/common/api/passwords.h"
#include <memory>
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
 
  password_manager::PasswordForm password_form;
  password_form.username_value = base::UTF8ToUTF16(params->data.username);
  password_form.password_value = base::UTF8ToUTF16(params->data.password);
  password_form.url = password_manager_util::StripAuthAndParams(password_manager_util::ConstructGURLWithScheme(params->data.url));
  password_form.signon_realm = password_manager::GetSignonRealm(password_form.url);
  password_form.type = password_manager::PasswordForm::Type::kManuallyAdded;
  bool success = spp.AddPassword(password_form);
  if (success)
    return RespondNow(
        OneArgument(base::Value("Password is added successfully.")));
  else
    return RespondNow(OneArgument(base::Value("Incorrect parametrs!")));
  
}

}  // namespace api
}  // namespace extensions