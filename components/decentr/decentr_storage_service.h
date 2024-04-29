#ifndef COMPONENTS_DECENTR_DECENTR_STORAGE_SERVICE_H_
#define COMPONENTS_DECENTR_DECENTR_STORAGE_SERVICE_H_

#include "components/keyed_service/core/keyed_service.h"

#include "components/prefs/pref_change_registrar.h"
#include "components/prefs/pref_registry_simple.h"

#include "sql/database.h"
#include "sql/statement.h"

namespace decentr {
  
class DecentrStorageService : public KeyedService {
 public:
  explicit DecentrStorageService(const base::FilePath& db_path) {
    if (!decentr_storage_db_.Open(db_path)) {
      return;
    }
    sql::Statement stmt(decentr_storage_db_.GetCachedStatement(
        SQL_FROM_HERE,
        "CREATE TABLE IF NOT EXISTS decentr_keys (id INTEGER PRIMARY KEY "
        "AUTOINCREMENT, name VARCHAR, value VARCHAR);"));

    if (!stmt.Step())
      return;
  }

  using key_t = std::string;
  using value_t = std::string;
  void Set(std::pair<key_t, value_t> object) {
    sql::Statement stmt(decentr_storage_db_.GetCachedStatement(
        SQL_FROM_HERE,
        "REPLACE INTO decentr_keys (name, value) VALUES(?, ?);"));

    auto [key, value] = std::move(object);
    stmt.BindString(0, std::move(key));
    stmt.BindString(1, std::move(value));

    if (!stmt.Step())
      return;
  }

  template <typename Callback>
  void Get(key_t key, Callback cb) {
    sql::Statement stmt(decentr_storage_db_.GetCachedStatement(
        SQL_FROM_HERE,
        "SELECT value FROM decentr_keys WHERE name=? ORDER BY id DESC LIMIT "
        "1;"));
    stmt.BindString(0, key);

    if (!stmt.Step())
      return;

    std::move(cb).Run(std::make_pair(std::move(key), stmt.ColumnString(0)));
  }

  ~DecentrStorageService() override {}

  DecentrStorageService(const DecentrStorageService&) = delete;
  DecentrStorageService& operator=(const DecentrStorageService&) = delete;

  static void RegisterProfilePrefs(PrefRegistrySimple* registry) {}

 private:
  sql::Database decentr_storage_db_;
};

}  // namespace decentr

#endif  // COMPONENTS_DECENTR_DECENTR_STORAGE_SERVICE_H_
