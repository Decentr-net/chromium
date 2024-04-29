#ifndef CHROME_BROWSER_DECENTR_DECENTR_STORAGE_SERVICE_FACTORY_H_
#define CHROME_BROWSER_DECENTR_DECENTR_STORAGE_SERVICE_FACTORY_H_

#include "base/memory/singleton.h"
#include "components/keyed_service/content/browser_context_keyed_service_factory.h"

namespace user_prefs {
class PrefRegistrySyncable;
}

namespace decentr {

class DecentrStorageService;

class DecentrStorageServiceFactory
    : public BrowserContextKeyedServiceFactory {
public:
    DecentrStorageServiceFactory(const DecentrStorageServiceFactory&) = delete;
    DecentrStorageServiceFactory& operator=( const DecentrStorageServiceFactory&) = delete;

    static DecentrStorageService* GetForBrowserContext(content::BrowserContext* context);
    static DecentrStorageServiceFactory* GetInstance();

private:
    friend struct base::DefaultSingletonTraits<DecentrStorageServiceFactory>;

    DecentrStorageServiceFactory();
    ~DecentrStorageServiceFactory() override;

    // BrowserContextKeyedServiceFactory:
    KeyedService* BuildServiceInstanceFor(content::BrowserContext* context) const override;
    void RegisterProfilePrefs(user_prefs::PrefRegistrySyncable* registry) override;
    bool ServiceIsCreatedWithBrowserContext() const override;
};

}  // namespace decentr

#endif  // CHROME_BROWSER_DECENTR_DECENTR_STORAGE_SERVICE_FACTORY_H_