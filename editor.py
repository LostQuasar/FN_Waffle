from tkinter import *
from tkinter.ttk import Combobox
import json

currency=("RUB","USD","EUR")
currencyId=("5449016a4bdc2d6f028b456f","5696686a4bdc2da3298b456a","569668774bdc2da2298b4568")
loyaltyLevels=(1,2,3,4)

class DisplayWindow:
    def __init__(self, win):
        self.nameLabel=Label(window, text="Item Name", fg='Black', font=("Helvetica", 16))
        self.nameLabel.place(x=20, y=20)
        
        self.nameField=Entry(window, text="")
        self.nameField.place(x=160, y=20)

        self.idLabel=Label(window, text="Item ID", fg='Black', font=("Helvetica", 16))
        self.idLabel.place(x=20, y=60)
        
        self.idField=Entry(window, text="")
        self.idField.place(x=160, y=60)
        
        self.priceLabel=Label(window, text="Price", fg='Black', font=("Helvetica", 16))
        self.priceLabel.place(x=20, y=100)
        
        self.priceField=Entry(window, text="")
        self.priceField.place(x=160, y=100)

        self.currencyLabel=Label(window, text="Currency", fg='Black', font=("Helvetica", 16))
        self.currencyLabel.place(x=20, y=140)

        self.currencySelect=Combobox(window, values=currency)
        self.currencySelect.place(x=140, y=145)
        self.currencySelect.set(currency[0])
        
        self.loyaltyLabel=Label(window, text="Loyalty", fg='Black', font=("Helvetica", 16))
        self.loyaltyLabel.place(x=20, y=180)
        
        self.loyaltySelect=Combobox(window, values=loyaltyLevels)
        self.loyaltySelect.place(x=140, y=185)
        self.loyaltySelect.set(loyaltyLevels[0])


        self.submitButton=Button(window, text="Submit", fg='black', font=("Helvetica", 16), command=self.submitAction)
        self.submitButton.place(x=20, y=220)
        
        self.outputLabel=Label(window, text="", fg='Black', font=("Helvetica", 16))
        self.outputLabel.place(x=140, y=220)
    
    def submitAction(self):
        nameVar = self.nameField.get().upper().replace(" ","_")
        idVar = self.idField.get()
        try:
            priceVar = int(self.priceField.get())
        except ValueError:
            self.outputLabel.config(text="Price Error", fg="Red")
            return
        currencyVar = self.currencySelect.get()
        currencyIdVar = currencyId[currency.index(currencyVar)]
        loyaltyVar = self.loyaltySelect.get()
        print(nameVar)
        print(idVar)
        print(priceVar)
        print(currencyVar +": "+currencyIdVar)

        with open("db/assort.json", "r") as jsonFile:
            jsonData = json.load(jsonFile)
        newJsonData = jsonData

        for item in jsonData['items']:
            if item["_tpl"] == idVar:
                self.outputLabel.config(text="Dup ID", fg="Red")
                return
            if item["_id"] == nameVar:
                self.outputLabel.config(text="Dup Name", fg="Red")
                return

        newJsonData['items'].append({
            "_id": nameVar,
            "_tpl": idVar,
            "parentId": "hideout",
            "slotId": "hideout",
            "upd": {
                "UnlimitedCount": True,
                "StackObjectsCount": 999999999
            }
        })

        newJsonData['barter_scheme'][nameVar]=[[]]
        newJsonData['barter_scheme'][nameVar][0].append({
            "count": priceVar,
            "_tpl": currencyIdVar
        })

        newJsonData['loyal_level_items'][nameVar]=int(loyaltyVar)

        with open("db/assort.json", "w") as jsonFile:
            try:
                json.dump(newJsonData,jsonFile,indent=2)
                self.outputLabel.config(text="Success", fg="Green")
            except:
                json.dump(jsonData,jsonFile,indent=2)
                self.outputLabel.config(text="Failed", fg="Red")

window=Tk()
mywin=DisplayWindow(window)
window.title('Tarkov Vendor Editor')
window.geometry("300x280")
window.mainloop()
