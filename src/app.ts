import "quill/dist/quill.snow.css";

import Quill from "quill/core";
import TableUp, { defaultCustomSelect, TableAlign, TableMenuContextmenu, TableMenuSelect, TableResizeBox, TableResizeScale, TableSelection, TableVirtualScrollbar } from 'quill-table-up';
import Toolbar from "quill/modules/toolbar";
import Snow from "quill/themes/snow";

import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";
import 'quill/dist/quill.snow.css';
import 'quill-table-up/index.css';
import 'quill-table-up/table-creator.css';

// Register the TableUp module
Quill.register({ [`modules/${TableUp.moduleName}`]: TableUp }, true);

Quill.register({
  "modules/toolbar": Toolbar,
  "themes/snow": Snow,
  "formats/bold": Bold,
  "formats/italic": Italic,
  "formats/header": Header,
  "modules/quill-table-up": TableUp,
});

const quill = new Quill('#editor', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'formula'],
      [{ [TableUp.toolName]: [] }]
    ],
    [TableUp.moduleName]: {
      scrollbar: TableVirtualScrollbar,
      align: TableAlign,
      resize: TableResizeBox,
      resizeScale: TableResizeScale,
      customSelect: defaultCustomSelect,
      selection: TableSelection,
      selectionOptions: {
        tableMenu: TableMenuContextmenu,TableMenuSelect

      }
    },
  },
  placeholder: 'Compose an epic...',
  theme: 'snow', // or 'bubble'
});

export default Quill;
