from requests_toolbelt.multipart.encoder import MultipartEncoder
import requests
import os


def send_request(body, url):
    for item in body:
        response = requests.post(url, json=item)
        if response.status_code == 200:
            print(response.text)
        else:
            print('Error occurred:', response.text)


def send_pic(image_folder, url):
    for filename in os.listdir(image_folder):
        if filename.endswith(('.jpg', '.jpeg', '.png')):
            image_path = os.path.join(image_folder, filename)

            dot_index = filename.rindex('.')
            image_type = filename[dot_index:]

            print("IMAGE TYPE " + image_type)

            encoder = MultipartEncoder(
                fields={'file': (filename, open(image_path, 'rb'), 'image/' + image_type)}
            )

            headers = {'Content-Type': encoder.content_type}

            title = filename[:dot_index]

            response = requests.post(url.format(title=title), data=encoder,
                                     headers=headers)
            if response.status_code == 200:
                print(response.text)
            else:
                print(f'Error occurred while uploading image {filename}: {response.text}')


def brand():
    url = 'http://localhost:8080/api/v1/brand/add_brand'

    body = [
        {
            'title': 'Truper',
            'description': 'Enhance your outdoor space with our premium garden accessories.'
        },
        {
            'title': 'Ceresit',
            'description': 'Revitalize your living spaces with our innovative home improvement solutions.'
        },
        {
            'title': 'Sniezka',
            'description': 'Embrace sustainable gardening practices with our eco-friendly products.'
        },
        {
            'title': 'Pfazer',
            'description': 'Experience luxury and elegance in every aspect of your home and garden.'
        },
        {
            'title': "Kapro",
            'description': 'Create a tranquil sanctuary in your backyard with our nature-inspired essentials.'
        },
        {
            'title': 'Finland',
            'description': 'Upgrade your home with cutting-edge smart devices for a seamless living experience.'
        },
        {
            'title': 'Farbitex',
            'description': 'Discover your green thumb and cultivate a flourishing garden with our expert tools.'
        },
        {
            'title': 'Centro',
            'description': 'Transform your house into a cozy nest with our warm and inviting home decor.'
        },
        {
            'title': 'PatioParadise',
            'description': 'Turn your outdoor space into a paradise for relaxation and entertainment.'
        },
        {
            'title': 'FreshBreeze',
            'description': 'Indulge in the freshness of nature with our range of air purifiers and fragrances.'
        }
    ]

    send_request(body, url)


def brand_pic():
    url = 'http://localhost:8080/api/v1/brand/add_image/{title}'
    image_folder = 'python/brand_images'

    send_pic(image_folder, url)


def main_category():
    url = 'http://localhost:8080/api/v1/mainCategory/add?title='
    body = ['Overalls', 'Electrical equipment', 'Painting products', 'Seasonal', 'For home and garden', 'Tools']

    for item in body:
        response = requests.post(url + item, json=item)

        if response.status_code == 200:
            print('Brand added successfully')
        else:
            print('Error occurred:', response.text)


def product_category():
    url = 'http://localhost:8080/api/v1/product_category/add_product'

    body = [
        {
            'title': 'Watering tools',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Pumps',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Polycarbonate',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Gardening tools',
            'mainCategory': 'For home and garden'
        },
        {
            'title': "Primer",
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Rabitz wire mesh',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Summer shower',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Washbasins, hand basins',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Whitewashing',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Garden paint',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Fertilizer',
            'mainCategory': 'For home and garden'
        },
        {
            'title': 'Furnace castings and accessories',
            'mainCategory': 'For home and garden'
        }
    ]

    send_request(body, url)


def product_category_pic():
    url = 'http://localhost:8080/api/v1/product_category/add/{title}'
    image_folder = 'python/product_category_image'

    send_pic(image_folder, url)


def product():
    url = 'http://localhost:8080/api/v1/product/add_product'

    body = [
        {
            "brand": "Ceresit",
            "productCategory": "Garden paint",
            "title": "Condor PF-115 Yellow 1.8 kg",
            "description": "Lorem ipsum dolor sit amet, "
                           "consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                           "ut labore et dolore magna aliqua",
            "isNew": "true",
            "price": "400",
            "discountPrice": "380",
            "deliveryType": "EXPRESS",
            "colour": "yellow"
        },
        {
            "brand": "Ceresit",
            "productCategory": "Garden paint",
            "title": "Condor PF-115 Blue 2 kg",
            "description": "Lorem ipsum dolor sit amet, "
                           "consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                           "ut labore et dolore magna aliqua",
            "isNew": "true",
            "price": "300",
            "discountPrice": "0",
            "deliveryType": "EXPRESS",
            "colour": "blue"
        },
        {
            "brand": "Ceresit",
            "productCategory": "Garden paint",
            "title": "Condor PF-115 Purple 2 kg",
            "description": "Lorem ipsum dolor sit amet, "
                           "consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                           "ut labore et dolore magna aliqua",
            "isNew": "false",
            "price": "200",
            "discountPrice": "0",
            "deliveryType": "EXPRESS",
            "colour": "purple"
        },
        {
            "brand": "Ceresit",
            "productCategory": "Garden paint",
            "title": "Condor PF-115 Purple 0.5 kg",
            "description": "Lorem ipsum dolor sit amet, "
                           "consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                           "ut labore et dolore magna aliqua",
            "isNew": "false",
            "price": "100",
            "discountPrice": "0",
            "deliveryType": "EXPRESS",
            "colour": "purple"
        },
        {
            "brand": "Ceresit",
            "productCategory": "Garden paint",
            "title": "Condor PF-115 Green 2 kg",
            "description": "Lorem ipsum dolor sit amet, "
                           "consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                           "ut labore et dolore magna aliqua",
            "isNew": "false",
            "price": "200",
            "discountPrice": "0",
            "deliveryType": "EXPRESS",
            "colour": "purple"
        },
        {
            "brand": "Ceresit",
            "productCategory": "Garden paint",
            "title": "Condor PF-115 Red 2 kg",
            "description": "Lorem ipsum dolor sit amet, "
                           "consectetur adipiscing elit, sed do eiusmod tempor incididunt "
                           "ut labore et dolore magna aliqua",
            "isNew": "false",
            "price": "1000",
            "discountPrice": "0",
            "deliveryType": "EXPRESS",
            "colour": "purple"
        }
    ]
    send_request(body, url)


def product_pic():
    url = 'http://localhost:8080/api/v1/product/add_image/{title}'
    image_folder = 'python/product_image'

    send_pic(image_folder, url)


def product_main_pic():
    url = 'http://localhost:8080/api/v1/product/add_main_image/{title}'
    image_folder = 'python/product_image'

    send_pic(image_folder, url)


if __name__ == "__main__":
    brand()
    brand_pic()
    main_category()
    product_category()
    product_category_pic()
    product()
    product_pic()
    product_main_pic()