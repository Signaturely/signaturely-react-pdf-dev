import { RenderingCancelledException } from 'pdfjs-dist';

import type { PDFDocumentProxy } from 'pdfjs-dist';

export default {
  _pdfInfo: {
    fingerprint: 'a62067476e69734bb8eb60122615dfbf',
    numPages: 4,
  },
  fingerprint: 'a62067476e69734bb8eb60122615dfbf',
  getDestination: () =>
    new Promise((resolve, reject) =>
      reject(new RenderingCancelledException('Cancelled', 'cancelled')),
    ),
  getOutline: () =>
    new Promise((resolve, reject) =>
      reject(new RenderingCancelledException('Cancelled', 'cancelled')),
    ),
  getPage: () =>
    new Promise((resolve, reject) =>
      reject(new RenderingCancelledException('Cancelled', 'cancelled')),
    ),
  numPages: 4,
} as unknown as PDFDocumentProxy;
