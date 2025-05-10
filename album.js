new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false, // Changed from true to false
      selectedImage: null,
      items: [
        {
          img1: "DCR1.png",
          img2: "DCR2.png",
          img3: "DCR3.png",
          title: "Zlote Mysli Rozalki",
          isOpen: false,
        },
        {
          img1: "foto1.jpg",
          img2: "foto1.jpg",
          img3: "foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
        {
          img1: "foto1.jpg",
          img2: "foto1.jpg",
          img3: "foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
        {
          img1: "foto1.jpg",
          img2: "foto1.jpg",
          img3: "foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
        {
          img1: "foto1.jpg",
          img2: "foto1.jpg",
          img3: "foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },

    showImage(imageSrc) {
      this.selectedImage = imageSrc;
    },

    closeModal() {
      this.selectedImage = null;
    },
  },
});