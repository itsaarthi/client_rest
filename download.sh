FILE=$1
echo Downloading $FILE

wget https://enact.infynect.com/m2m/$FILE -P $HOME/Downloads --certificate=/etc/ec/certs/enact/enact-crt.pem --private-key=/etc/ec/certs/enact/client-key.pem