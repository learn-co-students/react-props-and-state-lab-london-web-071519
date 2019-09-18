const get = url => fetch(url).then(resp => resp.json())

const getPets = type => {
  const url = type === 'all' ? '/api/pets' : `/api/pets?type=${type}`
  return get(url)
}

export default { getPets: getPets }
