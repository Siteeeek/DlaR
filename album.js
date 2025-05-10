new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: false, // Changed from true to false
      selectedImage: null,
      items: [
        {
          img1: "images/DCR1.png",
          img2: "images/DCR2.png",
          img3: "images/DCR3.png",
          title: "Zlote Mysli Rozalki",
          isOpen: false,
        },
        {
          img1: "images/foto1.jpg",
          img2: "images/foto1.jpg",
          img3: "images/foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
        {
          img1: "images/foto1.jpg",
          img2: "images/foto1.jpg",
          img3: "images/foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
        {
          img1: "images/foto1.jpg",
          img2: "images/foto1.jpg",
          img3: "images/foto1.jpg",
          title: "ZABLOKOWANE",
          isOpen: false,
        },
        {
          img1: "images/foto1.jpg",
          img2: "images/foto1.jpg",
          img3: "images/foto1.jpg",
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