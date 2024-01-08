declare interface JSimpleSearchQueryString {
  query: {
    query_string: {
      query: string
    }
  }
}

declare interface JSimpleSearchResult {
  took: number
  timedOut: boolean
  shards: {
    total: number
    successful: number
    skipped: number
    failed: number
  }
  hits: {
    total: {
      value: number
      relation: string
    }
    maxScore: number
    hits: JSimpleSearchResultHit[]
  }
}

declare interface JSimpleSearchResultHit {
  _index: string
  _source: { [attributeName: string]: any }
  _id: JId
  _score: number
  highlight?: { [attributeName: string]: string[] }
}

declare interface JSimpleSearchSuccessEventParams {
  result: JSimpleSearchResult
}

declare interface JSimpleSearchErrorEventParams {
  error: any
}
