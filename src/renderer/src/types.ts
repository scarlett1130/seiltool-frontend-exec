export type RecordProperty = {
  id: string
  content: string
  link_type: string
}

export type Record = {
  category: RecordProperty
  description: RecordProperty
  next_inspection: RecordProperty
  operator: RecordProperty
  ordz: RecordProperty
  site: RecordProperty
}

export type Category = {
  code: string
}

export type Conditions = {
  keyword: string
  categories: string
  page: number
  limit: number
}
