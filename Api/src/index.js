import app from './app.js'
import { PORT } from './config/enviroments.js'

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
