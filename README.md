# Commands test example

Some informaion can help you to understand how it works. I hope I didn't miss anything.

## Start project

    (By default  npm run start -- --username=TEST_user) 
    
    or 
    
    (node src/main.js -- --username=TEST_user)
    
    npm run start 

> Welcome to the File Manager, TEST_user!
> You are currently in C:\Users\Admin

## exit

     ctrl + c 
     
     .exit

> Thank you for using File Manager, TEST_user!

## up

    up
> You are currently in C:\Users

## ls

    ls 
> [
  'Admin', 'Default', 'Default User', 'desktop.ini', 'Public', 'Все пользователи'
]

## cd

    cd Admin
> You are currently in C:\Users\Admin
    
    cd Music
> You are currently in C:\Users\Admin\Music
    
    cd D:\Node\Data
> You are currently in D:\Node\Data

    cd gnfdkfdjlkghdjkhgjl
> Operation failed

    cd D:\Node\Data\text.txt
> Operation failed

## add

    add test.txt
> File test.txt created

## rn

    rn test.txt test01.txt
> File test.txt renamed to test01.txt
    
    rn D:\Node\Data\text.txt test01.txt
> File test.txt renamed to test01.txt

    rn tefdsdfsdsfst.txt tesfsdfdfsfdst01.txt
> Operation failed

## cp

    cp test01.txt Documents
> File copied
    
    cp D:\Node\Data\text.txt D:\Node\Data\Documents\text.txt
> File copied

    cp test0dffddsd1.txt Documents
> Operation failed

## mv

    mv text.txt D:\Node\Data\Documents\text.txt
> File text.txt moved into Documents
> Base file deleted

    mv D:\Node\Data\text.txt D:\Node\Data\Documents\text.txt
> File text.txt moved into Documents
> Base file deleted

    mv tedaasddasadxt.txt D:\Node\Data\Documents\text.txt
> Operation failed

## rm

    rm test.txt
> File test.txt deleted

    rm D:\Node\Data\Documents\text.txt
> File test.txt deleted

    rm tesdsfdsffsdt.txt
> Operation failed

## os

    os --EOL

> "\r\n"

    os --cpus
>   Total CPUs count: 12
>   CPU model: AMD Ryzen 5 3600 6-Core Processor
> [{
    model: 'AMD Ryzen 5 3600 6-Core Processor      speed: '3.593 GHz'
    }
  ...
    {
    model: 'AMD Ryzen 5 3600 6-Core Processor      speed: '3.593 GHz'
    } ]

    os --homedir
> C:\Users\Admin

    os --username
> Admin

    os --architecture
> x64

## hash

     hash C:\Users\Adimn\test.txt
> f22119484f2c0896693b24db3e9e52febf66d76abe330ffb4ba54b6dbdc9a9d8

     hash C:\Users\Adimn\tesfdsfdsst.txt
> Operation failed

## compress

    compress test.txt Documents
> File test.txt compressed into C:\Users\Adimn\Documents\text.txt`

    compress tesfffsfsst.txt Documents
> Operation failed

## decompress

    decompress test.txt.br Documents
> File test.txt decompressed into C:\Users\Adimn\Documents\text.txt`

    decompress tesfffsfsst.txt Documents
> Operation failed