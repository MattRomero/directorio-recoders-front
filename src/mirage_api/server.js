// src/server.js
import { createServer } from "miragejs"

export default function () {
    createServer({
        routes() {
            this.get("/api/users", () => ({
                skillsets: {
                    1: {
                        id: 1,
                        title: "Front End",
                        color: "#1BC5ED",
                    },
                    
                    2: {
                        id: 2,
                        title: "Back End",
                        color: "#0057FF",
                    },
                    
                    3: {
                        id: 3,
                        title: "UX",
                        color: "#1BC5ED",
                    },
                    
                    4: {
                        id: 4,
                        title: "UI",
                        color: "#FF61F6",
                    }
                },
                technologies: [
                    {
                        id: 1,
                        title: "Javascript",
                    },
                    
                    {
                        id: 2,
                        title: "Python",
                    },
                    
                    {
                        id: 3,
                        title: "MongoDB",
                    },
                ],
                users: [
                    { 
                        id: 1,
                        name: "Matías Romero",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu", 
                        skillset: [1],
                    },
                    { 
                        id: 2,
                        name: "Carlos Guzman", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.",
                        skillset: [1],
                    },
                    { 
                        id: 3, 
                        name: "Matías Criado", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph",
                        skillset: [1]
                    },
                    { 
                        id: 4,
                        name: "Natalia Bustamante",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
                        skillset: [3,4]
                    },
                    { 
                        id: 5,
                        name: "Fernanda", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.", 
                        skillset: [3,4]
                    },
                    { 
                        id: 6, 
                        name: "Eduardo Prieto", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph",
                        skillset: [3,4]
                    },
                    { 
                        id: 7,
                        name: "Paz Parry",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
                        skillset: [1,2,3,4]
                    },
                    { 
                        id: 8,
                        name: "Felipe Riquelme", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.", 
                        skillset: [1,2]
                    },
                ],
            }))
        },
    })
}