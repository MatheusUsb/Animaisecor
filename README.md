# Animaisecor
# Neste exemplo, a função listar_animais_por_cor recebe uma cor como parâmetro e retorna uma lista de animais associados àquela cor

def listar_animais_por_cor(cor):
    animais = {
        'azul': ['pavão', 'arara', 'peixe-palhaço'],
        'branco': ['cisne', 'coelho', 'polar urso'],
        'amarelo': ['leão', 'tigre', 'girafa']
    }
    
    if cor in animais:
        return animais[cor]
    else:
        return []

cor_escolhida = input("Escolha uma cor (azul, branco ou amarelo): ")

animais_da_cor = listar_animais_por_cor(cor_escolhida)

if animais_da_cor:
    print("Animais que são da cor", cor_escolhida + ":")
    for animal in animais_da_cor:
        print(animal)
else:
    print("Desculpe, não há animais associados à cor", cor_escolhida)

