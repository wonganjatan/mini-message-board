import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')
  const [messages, setMessages] = useState([])
  const [form, setForm] = useState({
    text: "",
    user: "",
    added: new Date()
  })

  const handleChange = (e) => {
      const { name, value } = e.target

      setForm(prev => ({
        ...prev,
        [name]: value
      }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post("http://localhost:3000/messages/new", form)
        setMessages(prev => [...prev, res.data])
      } catch (error) {
        console.log(error.data)
      }
    }

  useEffect(() => {

    const fetchData = async () => {
      const [res1, res2] = await Promise.all([
        axios.get("http://localhost:3000/"),
        axios.get("http://localhost:3000/messages")
      ])

      setData(res1.data)
      setMessages(res2.data)
    }

    fetchData()
  }, [])

  return (
    <>
      <div>Hello World</div>
      <div>{data}</div>
      <div>
        {messages.map((m, index) => (
          <div key={index}>
            <p>{m.text}</p>
            <p>{m.user}</p>
            <p>{m.added}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name='text' value={form.text} onChange={handleChange} placeholder='text'/>
        <input type="text" name='user' value={form.user} onChange={handleChange} placeholder='user'/>
        <button type='submit'>ok</button>
      </form>
    </>
  )
}

export default App
