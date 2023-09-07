// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const fetchPerson = () => {
  return fetch('https://randomuser.me/api').then(res => res.json()).then(res => res.results[0])
}

const wrapPromise = (promise) => {
  let status = 'pending'
  let result = '';
  const suspense = promise.then(r => {
    status = 'success'
    result = r
  }, err => {
    status = 'error'
    result = err
  })

  return {
    read() {
      if (status === 'pending') {
        throw suspense
      } else if (status === 'error') {
        throw result
      }

      return results
    }
  }

}

export const createResource = () => {
  return {
    person: wrapPromise(fetchPerson())
  }
}