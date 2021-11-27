export default interface Movies {
    data: {
      id?:  string
      title: string
      categoria: string
      tempo: string
      descripcao: string
      ano: boolean
      is_active: Date
      updated_at?: Date
      posted_by: string
      portada: string
      created_at:string
    }
}