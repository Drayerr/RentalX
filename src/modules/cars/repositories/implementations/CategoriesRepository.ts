import { Category } from '../../model/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]
  
  //Preparando SINGLETON
  //SINGLETON: padrão para utilizar uma única instância em qualquer parte do código.
  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  //Função para que a instância seja chamada em outros módulos (parte do SINGLETON)
  public static getInstance(): CategoriesRepository {

    if(!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }
    return CategoriesRepository.INSTANCE
  }

  create({ description, name } : ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository }