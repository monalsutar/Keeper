function foot(){

    const dat = new Date().getFullYear()

    return <div>
        <footer>
            Copyright {dat}
        </footer>
    </div>
}

export default foot