#include "chrome/browser/decentr/decentr_storage_service_factory.h"

#include <memory>

#include "components/decentr/decentr_storage_service.h"
#include "components/keyed_service/content/browser_context_dependency_manager.h"
#include "base/memory/singleton.h"
#include "content/public/browser/browser_context.h"
#include "content/public/browser/storage_partition.h"
#include "components/pref_registry/pref_registry_syncable.h"
#include "components/user_prefs/user_prefs.h"

namespace decentr {

// static
DecentrStorageService* DecentrStorageServiceFactory::GetForBrowserContext(content::BrowserContext* context) {
    return static_cast<DecentrStorageService*>(GetInstance()->GetServiceForBrowserContext(context, true));
}

// static
DecentrStorageServiceFactory* DecentrStorageServiceFactory::GetInstance() {
    return base::Singleton<DecentrStorageServiceFactory>::get();
}

DecentrStorageServiceFactory::DecentrStorageServiceFactory()
    : BrowserContextKeyedServiceFactory("DecentrStorageService", BrowserContextDependencyManager::GetInstance()) {}

DecentrStorageServiceFactory::~DecentrStorageServiceFactory() {}

KeyedService* DecentrStorageServiceFactory::BuildServiceInstanceFor(content::BrowserContext* context) const {
    auto url_loader_factory = context->GetDefaultStoragePartition()->GetURLLoaderFactoryForBrowserProcess();
    auto decentr_storage_service = std::make_unique<DecentrStorageService>(context->GetPath().Append(FILE_PATH_LITERAL("decentr_storage_db")));
    return decentr_storage_service.release();
}

void DecentrStorageServiceFactory::RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry) {
    DecentrStorageService::RegisterProfilePrefs(registry);
}

bool DecentrStorageServiceFactory::ServiceIsCreatedWithBrowserContext() const {
  return true;
}

}  // namespace decentr
