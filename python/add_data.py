import random
import time

import requests

sub_category_titles_overalls = ['Work Overalls', "Women's Overalls", "Men's Overalls", 'Coveralls', 'Painter Overalls',
                                'Mechanic Overalls', 'Protective Overalls', 'Insulated Overalls']

sub_category_titles_electrical_equipment = ['Electrical outlets', 'Extension cords', 'Electric motors', 'Transformers',
                                            'Resistors', 'Electrical connectors']

sub_category_titles_painting_products = ['Paint brushes', 'Rollers', 'Paint trays', 'Painting kits', 'Primer',
                                         'Acrylic paint']

sub_category_titles_seasonal = ['Seasonal decorations', 'Holiday ornaments', 'Winter accessories', 'Summer essentials',
                                'Christmas lights', 'Easter baskets']

sub_category_titles_for_home_and_garden = ['Plant pots', 'Garden Furniture', 'Picnic ware',
                                           'Watering nozzles and hoses', 'Garden shredders', 'Garden accessories']

sub_category_titles_tools = ['Hammer', 'Screwdriver', 'Wrench', 'Pliers', 'Drill', 'Saw']

sub_category_all_titles = [sub_category_titles_electrical_equipment, sub_category_titles_painting_products,
                           sub_category_titles_seasonal, sub_category_titles_for_home_and_garden,
                           sub_category_titles_tools, sub_category_titles_overalls]

images_links = ['https://i.imgur.com/7ivuV6x.png', 'https://i.imgur.com/QvAaVus.png',
                'https://i.imgur.com/pzenGHx.png', 'https://i.imgur.com/We2hlP1.png',
                'https://i.imgur.com/yE3Nd2g.png', 'https://i.imgur.com/uu9yirs.png',
                'https://i.imgur.com/2qBdHy9.png']

main_categories = ['Overalls', 'Electrical equipment',
                   'Painting products', 'Seasonal',
                   'For home and garden', 'Tools']

brands = ['Truper', 'Ceresit', 'Sniezka', 'Pfazer', "Kapro", 'Finland', 'Farbitex',
          'Centro', 'PatioParadise', 'FreshBreeze']

made_country = ["GERMANY", "USA", "POLAND"]

delivery_type = ["STANDARD", "EXPRESS", "NEXT_DAY", "SAME_DAY"]


def logging(message):
    symbol = "=" * 20
    log = symbol + "__PYTHON__" + symbol + "\n\n--> {}\n\n" + symbol + "__INFORM__" + symbol
    print(log.format(message))


def send_request(body, url):
    i = 0
    for item in body:
        response = requests.post(url, json=item)
        if response.status_code == 200:
            i += 1
    logging(str(i) + " items added to the Data base")


def brand():
    url = 'http://localhost:8080/api/v1/brand/add_brand'

    body = [
        {
            'title': brands[0],
            'description': 'Enhance your outdoor space with our premium garden accessories.',
            "brandImageLink": "https://i.imgur.com/sYKD8XC.png"
        },
        {
            'title': brands[1],
            'description': 'Revitalize your living spaces with our innovative home improvement solutions.',
            "brandImageLink": "https://i.imgur.com/kPxLmOg.png"
        },
        {
            'title': brands[2],
            'description': 'Embrace sustainable gardening practices with our eco-friendly products.',
            "brandImageLink": "https://i.imgur.com/xiPJS6D.png"
        },
        {
            'title': brands[3],
            'description': 'Experience luxury and elegance in every aspect of your home and garden.',
            "brandImageLink": "https://i.imgur.com/YKGqX7x.png"

        },
        {
            'title': brands[4],
            'description': 'Create a tranquil sanctuary in your backyard with our nature-inspired essentials.',
            "brandImageLink": "https://i.imgur.com/od8f52s.png"
        },
        {
            'title': brands[5],
            'description': 'Upgrade your home with cutting-edge smart devices for a seamless living experience.',
            "brandImageLink": "https://i.imgur.com/y0hhnqy.png"
        },
        {
            'title': brands[6],
            'description': 'Discover your green thumb and cultivate a flourishing garden with our expert tools.',
            "brandImageLink": "https://i.imgur.com/oqp5RgV.png"
        },
        {
            'title': brands[7],
            'description': 'Transform your house into a cozy nest with our warm and inviting home decor.',
            "brandImageLink": "https://i.imgur.com/wNGsyqk.png"
        },
        {
            'title': brands[8],
            'description': 'Turn your outdoor space into a paradise for relaxation and entertainment.',
            "brandImageLink": "https://i.imgur.com/wNGsyqk.png"

        },
        {
            'title': brands[9],
            'description': 'Indulge in the freshness of nature with our range of air purifiers and fragrances.',
            "brandImageLink": "https://i.imgur.com/vK389LO.jpg"
        }
    ]

    send_request(body, url)


def main_category():
    url = 'http://localhost:8080/api/v1/mainCategory/add?title='

    i = 0
    for item in main_categories:
        requests.post(url + item, json=item)
        i += 1
    logging(str(i) + " main categories successfully added")


def sub_category():
    url = 'http://localhost:8080/api/v1/sub_category/add'

    body = []
    for i, category in enumerate(main_categories):
        titles = sub_category_all_titles[i]
        for title in titles:
            body.append({
                'title': title,
                'mainCategory': category,
                'imageLink': random.choice(images_links)
            })
        send_request(body, url)
        body = []


def offers():
    url = 'http://localhost:8080/api/v1/offers/add'

    body = []
    offers_titles = ['New products', "Discounts products", "Hot sales"]
    offers_description = ["Let's check", "Get in time", "Customer choice"]
    links = ['https://i.imgur.com/K0Xjpco.png', 'https://i.imgur.com/wVq0rrJ.png', 'https://i.imgur.com/Ja6V5gf.jpg']

    for i in range(3):
        body.append({
            'title': offers_titles[i],
            'description': offers_description[i],
            'imageLink': links[i]
        })
    print(body)
    send_request(body, url)


def product():
    url = 'http://localhost:8080/api/v1/product/add_product'

    used_titles = set()

    for sub_category_titles in sub_category_all_titles:
        body = []
        for i in range(300):
            sub_category_value = random.choice(sub_category_titles)
            while True:
                random_letters = ""
                for j in range(random.randrange(4)):
                    random_letters = random_letters + (random.choice(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                                                                      'J', 'K', 'L', 'M',
                                                                      'N', 'O', 'P', 'R', 'S', 'T', ',U', 'V', 'W',
                                                                      'X', 'Y', 'Z', 'a',
                                                                      'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                                                                      'l', 'm', 'n',
                                                                      'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
                                                                      'x', 'y', 'z,']))
                random_number = random.randint(1, 9999)

                title = "" + sub_category_value + " " + random_letters + "-" + str(random_number)
                if title not in used_titles:
                    used_titles.add(title)
                    break
            brand_value = random.choice(brands)
            price = round(random.uniform(1, 500), 2)
            discount_price = price * 0.15 if random.random() < 0.04 else 0.00
            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " \
                          "incididunt ut labore et dolore magna aliqua"
            is_new = random.random() < 0.1
            delivery_type_value = random.choice(delivery_type)
            colour = random.choice(["RED", "BLUE", "GREEN", "YELLOW", "BLACK", "WHITE"])
            main_image_link = random.choice(images_links)
            product_images_links = random.sample(images_links, k=3)
            made_country_value = random.choice(made_country)
            in_stock = random.randint(5, 100)
            is_hit = random.random() < 0.1

            body.append({
                "title": title,
                "brand": brand_value,
                "characteristicDto": {
                    "type": random.choice([
                        "Concrete structure",
                        "Steel frame",
                        "Wooden framework",
                        "Masonry",
                        "Glass facade",
                        "Prefabricated panels",
                        "Brickwork",
                        "Roofing system",
                        "Foundation",
                        "Structural element"
                    ]),
                    "assignment": random.choice([
                        "Residential building",
                        "Commercial complex",
                        "Industrial facility",
                        "Infrastructure project",
                        "Public institution",
                        "Office space",
                        "Renovation project",
                        "Highway construction",
                        "Bridge construction",
                        "Utility installation"
                    ]),
                    "typeOfWork": random.choice([
                        "Excavation",
                        "Concrete pouring",
                        "Welding",
                        "Carpentry",
                        "Electrical installation",
                        "Plumbing",
                        "Roof installation",
                        "Finishing work",
                        "Painting",
                        "Landscaping"
                    ]),
                    "basis": random.choice([
                        "Architectural design",
                        "Structural engineering",
                        "Environmental impact",
                        "Budget constraints",
                        "Local regulations",
                        "Material availability",
                        "Energy efficiency",
                        "Safety standards",
                        "Aesthetic considerations",
                        "Client preferences"
                    ]),
                    "glossGrade": random.choice([
                        "Matte",
                        "Satin",
                        "Semi-gloss",
                        "High-gloss",
                        "Textured",
                        "Reflective",
                        "Eggshell",
                        "Pearlescent",
                        "Metallic",
                        "Glazed"
                    ]),
                    "weight": random.choice([
                        "1 kg",
                        "500 grams",
                        "2 kg",
                        "750 grams",
                        "1.5 kg",
                        "3 kg",
                        "2.5 kg",
                        "4 kg",
                        "3.5 kg",
                        "5 kg"
                    ])
                },
                "price": str(price),
                "discountPrice": str(discount_price),
                "description": description,
                "subCategoryTitle": sub_category_value,
                "isNew": str(is_new),
                "deliveryType": delivery_type_value,
                "colour": colour,
                "mainImageLink": main_image_link,
                "productImagesLinks": product_images_links,
                "madeCountry": made_country_value,
                "inStock": str(in_stock),
                "isHit": str(is_hit)
            })
        send_request(body, url)


def main():
    url_update = 'http://localhost:8080/change_log/update'
    url_is_update = 'http://localhost:8080/change_log/is_update'
    is_started = False
    while not is_started:
        try:
            response = requests.get(url_is_update)
        except (ConnectionRefusedError, requests.exceptions.ConnectionError):
            logging("Failed to connect, try again")
            time.sleep(4)
            continue
        if 'null' in response.text or response.text == "false":
            logging("Started filling the database")
            brand()
            main_category()
            sub_category()
            offers()
            product()
            requests.post(url_update)
        print("\n\n================\n__PYTHON__: The database has been successfully filled\n================")
        is_started = True


if __name__ == "__main__":
    main()