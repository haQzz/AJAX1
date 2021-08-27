let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET',`/page${ n + 1 }.json`)
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
        const array = JSON.parse(request.response)
        console.log(array)
        array.forEach(item => {
          const li  = document.createElement('li')
          li.textContent = item.id
          xxx.appendChild(li)
        })
        n+=1
    }
  }
  request.send()
}
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/3.json')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
      const object = JSON.parse(request.response)
      console.log(object)
    }
  }
  request.send()
}
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/style.css')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
      const style = document.createElement('style')
      style.innerHTML = request.response
      document.head.appendChild(style)
    }else {
      alert('请求失败')
    }
  }
  request.send()
}
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','/1.html')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
      const div = document.createElement('div')
      div.innerHTML = request.response
      document.body.appendChild(div)
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET','2.xml')
  request.onreadystatechange = () => {
    if(request.readyState === 4 && request.status === 200){
        const dom = request.responseXML
        const text = dom.getElementsByTagName('warning')[0].textContent
        console.log(text.trim())
    }
  }
  request.send()
}