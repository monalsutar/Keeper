import "./footer.css"


function foot(){

    const dat = new Date().getFullYear()

    return <div>
        <footer>
            <p>
                Copyright {dat}
            </p>
            
        </footer>
    </div>
}

export default foot