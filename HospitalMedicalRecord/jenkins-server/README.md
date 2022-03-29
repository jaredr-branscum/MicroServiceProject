# Instructions to create local Jenkins server
* Install virtualbox
* Install minikube, kubectl, helm
* minikube start --driver=virtualbox
* kubectl create namespace {name}
* helm repo add bitnami https://charts.bitnami.com/bitnami
* helm install jenkins-server bitnami/jenkins --set jenkinsUser={username} --set jenkinsPassword={password} --namespace={namespace}
* kubectl describe pods jenkins-server --namespace={namespace}
* Look for Ports and Jenkins External Port Number then port forward as InternalPort:ExternalPort
* kubectl port-forward svc/jenkins-server 8080:80 -n {namespace}
* Open up browser http://localhost:{InternalPort}

Note -n {namspace} is the same as --namespace={namespace}