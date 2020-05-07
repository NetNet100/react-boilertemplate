import React from 'react';
import './grid.css';

const grid = (props) => {
    const text1 = "Alexander McQueen brand was founded by designer Alexander McQueen in 1992.[2] It was by the suggestion of Isabella Blow that McQueen use his middle name for the label.[3] The house's early collections developed its reputation for controversy and shock tactics (earning the title \"l'enfant terrible\" and \"the hooligan of English fashion\"), with trousers aptly named \"bumsters\" and a collection entitled Highland Rape.[4][5] Alexander McQueen staged lavish and unconventional runway shows, such as a recreation of a shipwreck for his Spring 2003 collection, Spring 2005's human chess game, and the Fall 2006 show, Widows of Culloden, which featured a life-sized hologram of supermodel Kate Moss dressed in yards of rippling fabric.[6] In total, McQueen designed 36 collections for his London label, including his MA graduate collection";
    const text2 = "During his time as head designer, McQueen was awarded the title \"British Designer of the Year\" four times between 1996 and 2003;[8] he was also appointed a CBE and named International Designer of the Year by the Council of Fashion Designers in 2003";
    const text3 = "In December 2000, the Gucci Group acquired 51% of his company and appointed him as Creative Director[10] before launching stores in London,[11] Milan,[12] New York,[13] Los Angeles[14] and Las Vegas. On 31 October 2011, Alexander McQueen opened its first store in Beijing with a runway show.[15] Following the take over, the brand's catwalk presentations were relocated from London to Paris, beginning with the Spring/Summer 2002 collection with The Dance of The Twisted Bull on 6 October 2001";


    return (
        <div className="wrapper">
            <div>
                {text1}
            </div>
            <div>
                {text2}
            </div>
            <div>
                {text1}
            </div>
            <div>
                {text2}
            </div>
        </div>
    )
};

export default grid;