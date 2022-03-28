import imageNotFound from "~/assets/image-not-found.png";


export default {
  methods: {
    generatedCover: ( book ) => {
        const { isbn = null ,oclc = null ,lccn = null, cover_i = null, covers = null } = book

        if (cover_i)
          return `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`

        const coversBook =  Object.entries({isbn,oclc,lccn, covers})
          .filter(([_, v]) => v != null)[0]


      if(!!coversBook && coversBook[0].includes('covers')) coversBook[0] = 'id'

        return !!coversBook ? `https://covers.openlibrary.org/b/${coversBook[0]}/${coversBook[1][0]}-M.jpg`
          : imageNotFound
      }
    }
}
