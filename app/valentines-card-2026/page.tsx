import ValentinesCardComponent from "../components/ValentinesCardComponent"

const headline = `Roses are Red, 
Farts are mostly from You! I Love You! ❤️`

const text = `Dear Azure,

Happy Valentine's Day!

I am so glad that you can be my Valentine, and I am so thankful you are in my life. Here is to many more years together <3 🍷
`
const Valentines2026 = () => {

  return (
    <div>
      
        <ValentinesCardComponent backgroundColor={""} year={2026} image={"brooklyn-bridge.jpg"} text={text} headline={headline}/>
    </div>
  )
}

export default Valentines2026