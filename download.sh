FILE=$1
touch test.txt
echo $FILE >> test.txt
echo Downloading $FILE

wget https://enact.infynect.com/m2m/$FILE -P $HOME/Downloads --certificate=/etc/m2m/certs/enact/enact-crt.pem --private-key=/etc/m2m/certs/enact/client-key.pem