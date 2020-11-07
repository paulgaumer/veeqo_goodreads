interface IAuthor {
  name: string
  description: string
}

interface IAuthors {
  [key:string]: IAuthor
}

const AuthorsData: IAuthors = {
  1: {
    name: 'Eiji Yoshikawa',
    description: 'A sodales egestas faucibus ad ipsum venenatis, porttitor mi eleifend ac morbi per varius, phasellus facilisis nunc dignissim fermentum. Habitant porttitor parturient elementum iaculis ullamcorper torquent ridiculus vestibulum nunc netus, imperdiet feugiat diam cubilia id placerat enim pretium. Blandit euismod dolor pharetra odio varius bibendum tempus eros conubia sem natoque, facilisis lacinia venenatis dis cursus laoreet phasellus quis at netus non, ante turpis vulputate malesuada donec velit tincidunt molestie mi tempor.',
  },
  2: {
    name: 'Victor Hugo',
    description: 'A sodales egestas faucibus ad ipsum venenatis, porttitor mi eleifend ac morbi per varius, phasellus facilisis nunc dignissim fermentum. Habitant porttitor parturient elementum iaculis ullamcorper torquent ridiculus vestibulum nunc netus, imperdiet feugiat diam cubilia id placerat enim pretium. Blandit euismod dolor pharetra odio varius bibendum tempus eros conubia sem natoque, facilisis lacinia venenatis dis cursus laoreet phasellus quis at netus non, ante turpis vulputate malesuada donec velit tincidunt molestie mi tempor.',
  },
};

export default AuthorsData