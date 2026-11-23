import unittest
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
class SiteTests(unittest.TestCase):
    def test_files_exist(self):
        for name in ('index.html', 'styles.css', 'app.js'):
            self.assertTrue((ROOT / 'static' / name).is_file())
    def test_homepage(self):
        page = (ROOT / 'static/index.html').read_text()
        for marker in ('THREAD', 'id="collection"', 'id="products"', 'id="cart"', 'styles.css', 'app.js'):
            self.assertIn(marker, page)
if __name__ == '__main__': unittest.main()
