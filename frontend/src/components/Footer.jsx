import "../index.css"

function Footer(){
    return(
        <footer>
          <div className="contact_us">
            <b>Contact us :</b>
            ☎ -<a href="tel:9663538650">+91 9663538650</a>
            📧 -<a href="mailto:waterwise@gmail.com">waterwise@gmail.com</a>
            🗺 -<a href="">Water management dept, Tumkur townhall</a>
          </div>
          <div className="follow_us">
            <b>Follow us on </b>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
          </div>
        </footer>
    )
}

export default Footer