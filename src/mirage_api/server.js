// src/server.js
import { createServer } from "miragejs"

export default function () {
    createServer({
        routes() {
            this.get("/api/users", () => ({
                users: [
                    { 
                        id: 1,
                        name: "Matías Romero",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 2,
                        name: "Muriel Venegas", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 3, 
                        name: "Sebastián Oyarzún", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                    { 
                        id: 4,
                        name: "Jorge Gonzalez",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 5,
                        name: "Claudio Narea", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 6, 
                        name: "Miguel Tapia", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                    { 
                        id: 7,
                        name: "Claudio Bravo",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 8,
                        name: "Ivan Zamorano", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 9, 
                        name: "Marcelo Salas", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                    { 
                        id: 10,
                        name: "Michelle Bachelet",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 11,
                        name: "Sebastián Piñera", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 12, 
                        name: "Salfate", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                ],
            }))
        },
    })
}