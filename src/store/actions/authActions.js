import M from 'materialize-css';
import swal from 'sweetalert';

export const signIn = (credentials) => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();
		let toast = '<span><i class="material-icons left">check_circle</i>Succesfully Login!</span>';

		firebase.auth().signInWithEmailAndPassword(
			credentials.email,
			credentials.password
		).then(() => {
			dispatch({ type: 'LOGIN_SUCCESS' });
			 M.toast({html: toast, displayLength: 5000, classes: "rounded green"});
		}).catch((error) => {
			dispatch({ type: 'LOGIN_ERROR', error });
		});
	}
};


export const signOut = () => {
	return (dispatch, getState, { getFirebase }) => {
		const firebase = getFirebase();

		firebase.auth().signOut().then(() => {
			dispatch({ type: 'SIGNOUT_SUCCESS' })
		});
	}
}

export const signUp = (newUser) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firebase = getFirebase();
		const firestore = getFirestore();

		firebase.auth().createUserWithEmailAndPassword(
			newUser.email,
			newUser.password
		).then((response) => {
			return firestore.collection('users').doc(response.user.uid).set({
				firstName: newUser.firstName,
				lastName: newUser.lastName,
				initials: newUser.firstName[0] + newUser.lastName[0]
			})
		}).then(() => {
			dispatch({ type: 'SIGNUP_SUCCESS' });
			swal({
			  title: "Good job!",
			  text: "You Succesfully Registered!",
			  icon: "success",
			});
		}).catch((error) => {
			dispatch({ type: 'SIGNUP_ERROR', error });
		})
	}
}