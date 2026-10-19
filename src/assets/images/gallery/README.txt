GALLERY PHOTOS - KAISE ADD KAREN
=================================

1. Apni photos is folder me copy karo:
   src/assets/images/gallery/

2. Optional: category ke hisaab se in sub-folders me daal do:
   office/    -> Gallery me "Office" category
   success/   -> Gallery me "Success Stories" category
   events/    -> Gallery me "Events" category

3. Supported formats: .jpg  .jpeg  .png  .webp  .avif  .svg

4. Photo ka caption/category badalna ho to src/data/content.js me
   gallery.photoMeta me filename ke saath likh do, jaise:

     photoMeta: {
       "reception.jpg": { caption: "Our Modern Reception", category: "Office" },
     }

5. Folder me photos daalne ke baad website automatically reload ho jayegi
   par agar na dikhe to browser refresh (Ctrl+Shift+R) kar lena.

NOTE: File name se hi default caption ban jata hai
      (e.g. "office-reception.jpg" -> "Office Reception").
