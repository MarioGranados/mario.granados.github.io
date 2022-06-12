import "./Hero.css"

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="col_left box_effect box col">
                        <h4>title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur consequuntur
                            doloribus eaque, iusto placeat!</p>
                    </div>
                    <div className="col_right box_gloss box col">
                        <h3>title again</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iure minus optio soluta velit
                            vitae!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Hero;
