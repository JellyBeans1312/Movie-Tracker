import { fetchMovies, getUser, addUser, favoriteMovie, fetchFavorites, removeFavorite } from './apiCalls';
import { apiKey } from './apiKey'
import { async } from 'q';

describe('apiCalls', () => {
  
  describe("fetchMovies", () => {
    let mockResponse;
    
    beforeEach(() => {
      mockResponse = {
        results: [{
          adult: false,
          backdrop_path: "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
          genre_ids: Array[3],
          id: 429617,
          original_language: "en",
          original_title: "Spider-Man: Far from Home",
          overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural d…",
          popularity: 461.454,
          poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
          release_date: "2019-06-28",
          title: "Spider-Man: Far from Home",
          video: false,
          vote_average: 7.8,
          vote_count: 1815
        }]
      };
  
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
  
    it('should be able to fetch movies given url', () => {
      const expected = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}edd&language=en-US&page=1`
  
      fetchMovies()
      expect(window.fetch).toHaveBeenCalledWith(expected)
    });
  
    it('should return parsed response if ok', async () => {
      await expect(fetchMovies()).resolves.toEqual(mockResponse.results)
    });
  
    it('should return an error if not promise does not resolve', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      });
  
      await expect(fetchMovies()).resolves.toMatch('')
    });
  });

  describe("getUser", () => {
    let mockResponse;
    let user;

    beforeEach(() => {
      user = { email: 'something@nowhere.com', name: 'name', password: 'password' }
      mockResponse = {
        data: { email: 'something@nowhere.com', name: 'name', password: 'password', id: 1 }
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    })

    it('should be able to fetch user given url', () => {
      
      const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const url = `http://localhost:3000/api/users`;
      getUser(user);
      expect(window.fetch).toHaveBeenCalledWith(url, options);
    });
    
    it('should return a user if response is ok', async () => {  
      await expect(getUser(user)).resolves.toEqual(mockResponse.data);
    });

    it('should throw an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(getUser()).resolves.toEqual('Email and password do not match');
    });
  });

  describe('addUser', () => {
    let user;
    
    beforeEach(() => {
      user = user = { email: 'something@nowhere.com', name: 'name', password: 'password' }
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(user)
        });
      });
    });

    it('should POST a new user given the correct url', () => {
      const url = 'http://localhost:3000/api/users/new';
      const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      addUser(user)
      expect(window.fetch).toHaveBeenCalledWith(url, options)
    });

    it('should throw an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(addUser(user)).resolves.toMatch('');
    });
  });

  describe('favoriteMovie', () => {
    let movieInfo;

    beforeEach(() => {
      movieInfo = {
        movie_id: 1,
        user_id: 1,
        title: 'title',
        poster_path: 'something.jpg',
        release_date: '11/05/2000',
        vote_average: 7,
        overview: "I don't know"
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
        });
      });
    })

    it('should POST a favorite movie given the correct url', () => {
      const url = 'http://localhost:3000/api/users/favorites/new';
      const options = {
        method: 'POST',
        body: JSON.stringify(movieInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      };
      favoriteMovie(movieInfo)
      expect(window.fetch).toHaveBeenCalledWith(url, options)
    });

    it('should throw an error if response is not ok', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(favoriteMovie(movieInfo)).resolves.toEqual('Failed to fetch favorites');
    });
  });

  describe('fetchFavorites', () => {
    let userId;
    let mockResponse;

    beforeEach(() => {
      mockResponse = {
        data: [{
          adult: false,
          backdrop_path: "/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
          genre_ids: Array[3],
          id: 429617,
          original_language: "en",
          original_title: "Spider-Man: Far from Home",
          overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural d…",
          popularity: 461.454,
          poster_path: "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
          release_date: "2019-06-28",
          title: "Spider-Man: Far from Home",
          video: false,
          vote_average: 7.8,
          vote_count: 1815
        }]};
      userId = 1;
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });
    
    it('should be able to fetch favorites given correct url', () => {
      const url = `http://localhost:3000/api/users/${userId}/favorites`
      fetchFavorites(userId);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return a parsed result if response resolves', async () => {
      await expect(fetchFavorites(1)).resolves.toEqual(mockResponse.data);
    });

    it('should throw an error if response rejects', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      const expected = Error('Failed to fetch favorites')

      await expect(fetchFavorites(1)).rejects.toEqual(expected)
    });
  });

  describe('removeFavorites', () => {
    let movieInfo;

    beforeEach(() => {
      movieInfo = {
        movie_id: 1,
        user_id: 1,
        title: 'title',
        poster_path: 'something.jpg',
        release_date: '11/05/2000',
        vote_average: 7,
        overview: "I don't know"
      };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
        });
      });
    })

    it('should DELETE from api when passed the correct url', () => {
      const url = `http://localhost:3000/api/users/1/favorites/1`
      const option = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      removeFavorite(1, 1);

      expect(window.fetch).toHaveBeenCalledWith(url, option);
    });

    it('should throw an error if response rejects', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject({
          ok: false
        });
      });
      const expected = Error('Failed to remove favorite')

      await expect(removeFavorite(0, 1)).rejects.toEqual(expected)
    })
  });
});
