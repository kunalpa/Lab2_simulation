from PIL import Image
import numpy as np        

def convertImage(file_name):
    img = Image.open(f"./{file_name}.jpg")
    img = img.convert("RGBA")
    x, y = img.size
    image_np = np.array(img)

    n, m, _ = image_np.shape
    pixel_matrix = np.empty((n, m), dtype=object)
    for i in range(n):
        for j in range(m):
            r, g, b, a = image_np[i, j]
            pixel_matrix[i, j] = (r, g, b, a)

    # run dfs to remove connected whitepixels outside of character
    stack = [[0, 0], [y-1, x-1], [0, x-1], [y-1, 0]]
    while stack:
        row, col = stack.pop()
        if row < 0 or row >= y or col < 0 or col >= x:
            continue
        pixels = pixel_matrix[row,col]
        if pixels[0] > 200 and pixels[1] > 200 and pixels[2] > 200 and pixels[3] != 0:
            # we have found a whitespace
            stack.append([row+1, col])
            stack.append([row-1, col])
            stack.append([row, col+1])
            stack.append([row, col-1])
            pixel_matrix[row, col] = (255, 255, 255, 0)
    squashed_image = np.zeros((n, m, 4), dtype=np.uint8)
    for i in range(n):
        for j in range(m):
            squashed_image[i, j] = pixel_matrix[i, j]
    new_image = Image.fromarray(squashed_image, 'RGBA')
    new_image.save(f'../images/{file_name}.png')
    print("Successful")
 
convertImage('patrick')
convertImage('sponge')
convertImage('squid')
convertImage('heart')