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
                        name: "Matías Romero",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 5,
                        name: "Muriel Venegas", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 6, 
                        name: "Sebastián Oyarzún", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                    { 
                        id: 7,
                        name: "Matías Romero",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 8,
                        name: "Muriel Venegas", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 9, 
                        name: "Sebastián Oyarzún", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                    { 
                        id: 10,
                        name: "Matías Romero",
                        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu" 
                    },
                    { 
                        id: 11,
                        name: "Muriel Venegas", 
                        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large."  
                    },
                    { 
                        id: 12, 
                        name: "Sebastián Oyarzún", 
                        description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph"
                    },
                ],
            }))
        },
    })
}