import shortId from 'shortid'
import { config } from '../config/Constants'

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`
    res.json({ originURL, hash, shortURL })
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params
    const url = {
      originURL: "https://www.linkedin.com/in/kevingtxz/",
      hash: "CMSaYYUrG",
      "shortURL": "http://localhost:5000/CMSaYYUrG"
    }
    res.redirect(url.originURL)
  }
}