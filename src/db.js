import Dexie from 'dexie'

class Database {
  constructor () {
    this.db = new Dexie('sample')
    this.db.version(1).stores({
      farm: '++id, farm, state, city'
    })
  }

  async queryFarms () {
    return new Promise((resolve, reject) => {
      resolve(this.db.farm.toArray())
    })
  }

  async AddFarmByForm (form) {
    const { farm, state, city } = form
    await this.db.farm.put({ farm: farm, state: state, city: city })
  }

  async deleteById (id) {
    await this.db.farm.delete(id)
  }
}

export default new Database()
