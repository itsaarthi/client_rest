#!/bin/bash

mkdir -p  /etc/m2m/certs/cnf


echo -e "[ req ] 
default_bits           = 4096
days                   = 9999
distinguished_name     = req_distinguished_name
attributes             = req_attributes
prompt                 = no
x509_extensions        = v3_ca

[ req_distinguished_name ]
C                      = IN
ST                     = TN
L                      = Trichy
O                      = m2m Pvt Ltd
OU                     = secure
CN                     = node
emailAddress           = node@m2m.com

[ req_attributes ]
challengePassword      = 1M2m2Cloud
[ v3_ca ]
authorityInfoAccess = @issuer_info

[ issuer_info ]
OCSP;URI.0 = http://ocsp.example.com/
caIssuers;URI.0 = http://example.com/ca.cert" > /etc/m2m/certs/cnf/client.cnf


mkdir -p /etc/m2m/certs/enact/
#Create private key
openssl genrsa -out /etc/m2m/certs/enact/client-key.pem 4096
#Make the signing request
openssl req -new -config /etc/m2m/certs/cnf/client.cnf -key /etc/m2m/certs/client-key.pem -out /etc/m2m/certs/client-csr.pem

cp client-key.pem enact-crt.pem /etc/m2m/certs/enact/
chmod 777 /etc/m2m/certs/enact/*