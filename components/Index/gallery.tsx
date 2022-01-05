import styles from "./gallery.module.scss"
import Image from "next/image"
import Link from "next/link";
import {LightBoxGalery} from "../SharedComponents/LightBoxGalery";

function Gallery() {

    
  
    return(
        <div className={styles.container}>
           
            <div className={styles.galWrapper}>
            <h1 className={styles.h1}>Galerija</h1>
                     {new Array(8).fill(0).map((v) => {
                    return <div className={styles.imgWrap}>
                                <Image  key={v} src="/Cat.jpg" alt=""width={200} height={200}/>

                           </div>

                    ;})}

            </div>
        </div>
        
        
        
    );
}

export default Gallery;